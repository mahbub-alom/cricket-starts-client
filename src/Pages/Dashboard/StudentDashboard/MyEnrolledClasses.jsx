import React from "react";
import useEnrolledClasses from "../../../Hooks/useEnrolledclasses";
import { Rotate } from "react-awesome-reveal";

const MyEnrolledClasses = () => {
  const [enrolledClasses] = useEnrolledClasses();
  return (
    <div>
      <Rotate>
        <h1 className="text-2xl font-semibold mb-8">My Enrolled Classes</h1>
      </Rotate>
      <div className="grid grid-cols-2 gap-5">
        {enrolledClasses?.map((cls) => (
          <div
            key={cls?._id}
            className="card lg:card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img className="h-20 w-32 rounded-lg" src={cls?.classImage} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {cls?.className}</h2>
              <p>Instructor Name: {cls?.instructorName}</p>
              <div className="card-actions justify-end">
                <button className="btn text-white bg-fuchsia-500">
                  Continue Class
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
