const GraphDisplayList = ({children}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {children}
        </div>
    );
}

export default GraphDisplayList;