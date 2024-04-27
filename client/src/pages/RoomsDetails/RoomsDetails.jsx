import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";

const RoomsDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => {
        const signleRoom = data.find((room) => room._id === id);
        setRoom(signleRoom);
        setLoading(false);
      });
  }, [id]);
  if (loading) return <Loader />;
  return (
    <>
        <Helmet>
            <title>{room.title}</title>
        </Helmet>
      <Container>{room.title}</Container>
    </>
  );
};

export default RoomsDetails;
