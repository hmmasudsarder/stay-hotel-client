import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";
import RoomInfo from "../../components/RoomDetails/RoomInfo/RoomInfo";
import Calender from "../../components/RoomDetails/Calender";

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
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>{room.title}</title>
      </Helmet>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <Header room={room} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-8">
            <RoomInfo room={room} />
            <div className="md:col-span-3 order-first md:order-last mb-10">
              <Calender />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RoomsDetails;
