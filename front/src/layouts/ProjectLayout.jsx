import { Outlet } from "react-router-dom";

export default function ProjectLayout({ children }) {
    return (
        <div className="flex flex-row min-h-screen">
            <div className="bg-blue-600 w-64 p-4 text-white">
                <h1 className="text-xl">Sidebar</h1>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    {/* Add more items as needed */}
                </ul>
            </div>
            <div className="flex-grow bg-gray-100 p-4">
                <div>{children}</div>
            </div>
        </div>
    );
}
