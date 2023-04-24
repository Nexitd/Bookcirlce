import { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "widgets/footer";
import { Sidebar } from "widgets/sidebar";

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    const { pathname } = useLocation();


    return (
        <>
            {pathname === '/stream' ? <>{children}</> :
                <div className="main__flex">
                    <aside><Sidebar /></aside>
                    <main>
                        <div className="main__flex-content">
                            {children}
                        </div>

                        <Footer />
                    </main>
                </div>
            }
        </>
    );
};

export default Wrapper;