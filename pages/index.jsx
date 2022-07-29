import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
    const [data, setData] = useState([]);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="container py-4">
            <p className="lead mb-0">Personal Information</p>
            <p className="small">
                This information will be displayed publicly so be careful what
                you share.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <label for="fullname" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                name="fullname"
                                placeholder="Your Name"
                                {...register("fullname")}
                            />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="mb-3">
                            <label for="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Your Name"
                                {...register("email")}
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
