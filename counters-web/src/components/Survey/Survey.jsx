function Survey() {
    return (
        <div>
            <form name="Recipe-Requests" method="POST" netlify>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="desire">Level Of Desire</label>
                    <select name="desire" id="des">
                        <option value="1">High</option>
                        <option value="2">Normal</option>
                        <option value="3">Low</option>
                    </select>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="tit" />
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="desc" cols="30" rows="10"></textarea>
                    <button className="bg-slate-300 ml-96 mt-5 rounded" type="submit">Submit Request</button>
                </div>
            </form>
        </div>
    );
}

export default Survey;