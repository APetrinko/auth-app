import { Cardwrapper } from "./card-wraper"

export const LoginForm = () => {
    return (
        <Cardwrapper
        headerLabel='Welcome back'
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            Login Form!
        </Cardwrapper>
    )
}