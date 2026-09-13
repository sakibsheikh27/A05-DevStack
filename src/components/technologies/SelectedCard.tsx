
const SelectedCard = () => {
    return (
        <div className="w-[300px] px-4 py-4 rounded-lg outline outline-gray-200">
            <h2 className="font-medium text-xl">Your Satck</h2>
            <p className="text-[14px] text-[#526078]">No technologies selected yet.</p>
            <p className="w-full p-2 mt-3 rounded-lg outline outline-gray-200 text-sm text-[#526078] font-semibold">Your stack is empty</p>
        </div>
    );
};

export default SelectedCard;