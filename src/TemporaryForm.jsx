import { useState } from "react";

const TemporaryForm = () => {
    const [title, setTitle] = useState("");
    const [visibility, setVisibility] = useState("private");

    const isFormValid = title.trim() !== "";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            console.log("Form submitted:", { title, visibility });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Board title*</label>
                <input
                    type="text"
                    placeholder="Type a board title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {title.trim() === "" && (
                    <span className="text-red-600">Board title is required</span>
                )}
            </div>
            <div>
                <label>Visibility</label>
                <select
                    value={visibility}
                    onChange={(e) => setVisibility(e.target.value)}
                >
                    <option value="private">Private</option>
                    <option value="public">Public</option>
                    <option value="workspace">Workspace</option>
                </select>
            </div>
            <div>
                <button
                    className="btn btn-primary mb-2"
                    type="submit"
                    disabled={!isFormValid}
                >
                    Create
                </button>
            </div>
        </form>
    );
};

export default TemporaryForm;
