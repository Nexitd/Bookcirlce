import { RenderAuthModals } from 'features/auth';

// страница с авторизацией, регистрацией и восстановлением пароля
const Auth = () => {
    return (
        <div className="login__page">
            <RenderAuthModals />
        </div>
    )
}

export default Auth;