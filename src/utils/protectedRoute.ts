import { useAppSelector } from "../app-redux/hooks";

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: any }) => {
    const user = useAppSelector((state) => state.participant.current.username);

    if (!user) {
        return Navigate({ to: '/', replace: true })
    }
    return children;
};

export default ProtectedRoute;