import React from 'react';
import useEnrolledClasses from '../../../Hooks/useEnrolledclasses';
import { Slide } from 'react-awesome-reveal';

const MyPaymentHistory = () => {
    const [enrolledClasses] = useEnrolledClasses();
    return (
        <div>
            <Slide>
            <h1 className="text-2xl font-semibold mb-8">Payment History</h1>

            </Slide>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Class Name</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            enrolledClasses.map((stn, index) =>
                                <tr key={stn._id}>
                                    <th>{index + 1}</th>
                                    <td>{stn?.studentName}</td>
                                    <td>{stn?.studentEmail}</td>
                                    <td>{stn?.className}</td>
                                    <td>{stn?.transactionId}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;