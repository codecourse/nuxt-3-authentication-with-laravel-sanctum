import {useSanctumClient} from "#imports";

export const useAuth = () => {
    const sanctumFetch = useSanctumClient()

    async function register(form: RegisterForm) {
        return await sanctumFetch('/register', {
            method: 'POST',
            body: form
        })
    }

    async function updateProfile(form: ProfileForm) {
        return await sanctumFetch('/user/profile-information', {
            method: 'PUT',
            body: form
        })
    }

    return {
        register,
        updateProfile
    }
}