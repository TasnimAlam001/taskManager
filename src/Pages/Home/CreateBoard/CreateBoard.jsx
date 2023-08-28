
import { useForm } from "react-hook-form";

const CreateBoard = () => {


    const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <h3 className="font-bold text-lg text-center pb-10">Create Board</h3>
            <div className="bg-slate-100 p-1 rounded">
                <h2 className="font-bold">Background</h2>
                <p className="text-center py-6">Not available right now...</p>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Board title*</span>
                        </label>
                        <input
                            type="text"
                            name="title"
                            {...register("title", { required: true, maxLength: 20 })}
                            placeholder="Type a board title"
                            className="input input-bordered"
                        />
                        {formState.errors.title && (
                            <span className="text-red-600">Board title is required</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Visibility</span>
                        </label>
                        <select className="select select-bordered w-full ">

                            <option value="male">Private</option>
                            <option value="male">Public</option>
                            <option value="other">Workspace</option>
                        </select>

                    </div>

                    <div className="form-control mt-6">
                        <input
                            disabled={!formState.isValid}
                            className="btn btn-primary mb-2"
                            type="submit"
                            value="Create"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateBoard;