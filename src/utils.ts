const user = {
    email: 'abc@gmail.com',
    password: 'abc'
}

declare const process: {
    env: {
        NODE_ENV: string
    }
}

export function dispatch() {
    if (process.env.NODE_ENV === 'test') {
        throw new Error('Dispatch needs to be mocked while testing');
    }
}

export function login(email: string, password: string) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (user.email !== email && user.password !== password) {
                rej('Incorrect Credentials')
            } else if(user.email !== email) {
                rej('Invalid email!')
            } else if (user.password !== password) {
                rej('Invalid password!')
            } else {
                res(true);
            }
        })
    })
}

