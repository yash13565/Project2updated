import React from "react";
import ActivityStyle1 from "./Activity1.module.css";
import { Link } from "react-router-dom";
import { Data3 } from "../Atom/atom";
import { useRecoilState } from "recoil";

 function MyActivity2() {
  const [sub, setsub] = useRecoilState(Data3);
  console.log(sub)
  return (
    <>
      <p>Activit 50 </p>
      <Link
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1em",
        }}
        to="/"
      >
        <button onClick={setsub(true)}>Home</button>
      </Link>
      <div className={ActivityStyle1.grid}>
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
        <img
          width="100vh"
          height="100vh"
          src="https://www.muscleandfitness.com/wp-content/uploads/2017/07/1280-arms-exercise-standing-curls.jpg?quality=86&strip=all"
          alt="My.jpeg"
        />
      </div>
      <Link to="/">
        <button onClick={setsub(true)}>Home</button>
      </Link>
    </>
  );
}
export default MyActivity2()