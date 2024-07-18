declare global {
    interface ValidationErrors {
        [key: string]: string[]
    }

    interface LoginForm {
        email: string;
        password: string;
    }

    interface RegisterForm {
        name: string;
        email: string;
        password: string;
    }

    interface ProfileForm {
        name: string;
        email: string;
    }

    interface User {
        id: number;
        name: string;
        email: string;
    }
}