import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError(); // информацию об ошибке

    return (
        <div>
            <h1>Что-то пошло не так</h1>
            <p>произошла непредвиденная ошибка.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p>
                <a href="/">Вернуться на главную</a>
            </p>
        </div>
    );
}
