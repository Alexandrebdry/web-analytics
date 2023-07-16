const KpiDisplayList = ({children}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {children}
        </div>
    );
}

export default KpiDisplayList;