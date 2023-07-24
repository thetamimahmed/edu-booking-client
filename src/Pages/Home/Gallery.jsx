import { Container } from "../../Components/Shared/Container";

const Gallery = () => {
  return (
    <Container>
      <div className="pb-20">
        <div className="relative">
          <div className="w-[80px] h-[22px] bg-[#ffd24d] rounded-full absolute top-2  left-[13.5%] md:left-[22%] lg:left-[33.7%] lg:top-[24.3%] -z-10"></div>
          <h1 className="text-center text-[#072F60] text-4xl font-bold mb-5">
            Our Colleges Gallery
          </h1>
        </div>
        <div className="grid grid-cols-3">
            <img className="h-full" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            <img className="h-full" src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            <img className="h-full" src="https://images.unsplash.com/photo-1627556704243-5f0771d90783?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />

            <img  className="h-full" src="https://images.unsplash.com/photo-1527269534026-c86f4009eace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="h-full" src="https://images.unsplash.com/photo-1539413595691-37a09a48579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="h-full" src="https://images.unsplash.com/photo-1496469888073-80de7e952517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="h-full" src="https://images.unsplash.com/photo-1561409958-c0e6ad782a81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="h-full" src="https://images.unsplash.com/photo-1559308448-de7de9315f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxncmFkdWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <img className="h-full" src="https://plus.unsplash.com/premium_photo-1682974406908-66032d609d94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHxncmFkdWF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
