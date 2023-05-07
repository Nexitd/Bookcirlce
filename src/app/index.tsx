import { withProviders } from "app/providers";
import { Routing } from "pages";

// возвращаем App компонент со всеми обертками

const App = () => <Routing />

export default withProviders(App);