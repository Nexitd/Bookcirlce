import { ReactNode } from "react";
import Wrapper from "../layout";

// враппер с шапкой и подвалом

export const withWrapper = (component: () => ReactNode) => () =>
    <Wrapper>
        {component()}
    </Wrapper>