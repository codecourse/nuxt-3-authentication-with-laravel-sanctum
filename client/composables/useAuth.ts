import {useSanctumClient} from "#imports";

export const useAuth = () => {
    const sanctumFetch = useSanctumClient()

    async function register(form: RegisterForm) {
        return await sanctumFetch('/register', {
            method: 'POST',
            body: form
        })
    }

    return {
        register
    }
}