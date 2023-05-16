const avatarUser = document.querySelector('.avatar-user')
const nameUser = document.querySelector('.name-user')
const loginUser = document.querySelector('.login-user')
const bioUser = document.querySelector('.bio-user')
const followersUser = document.querySelector('.followers')
const followingUser = document.querySelector('.following')
const opacity = document.querySelector('.opacity')
const containerAvatar = document.querySelector('.container-avatar')
const avatarUserMax = document.querySelector('.avatar-user-max')
const container = document.querySelector('.container')
const form = document.querySelector('form')
const result = document.querySelector('.result')
const userNotFound = document.querySelector('.user-not-found')

form.addEventListener('submit', event => {
    event.preventDefault()
    const inputValue = event.target.search.value
    const getDataUser = async () => {
        try {
            result.style.animation = ''
            userNotFound.style.display = 'none'
            const endPointSearchUser = `https://api.github.com/users/${inputValue}`
            const response = await fetch(endPointSearchUser)
    
            if (!response.ok) {
                userNotFound.style.animation = 'user-not-found-animation 1.5s forwards'
                userNotFound.style.display = 'flex'
                throw new Error('Algum erro aconteceu')
            }
    
            return await response.json()
    
        }catch (error) {
            console.log(error)
        }
    }
    
    const setDataUser = async () => {
        getDataUser()
        .then(data => {
            console.log(data)
            const { avatar_url } = data
            const { name } = data
            const { login } = data
            const { bio } = data
            const { followers } = data
            const { following } = data

            console.log(avatar_url)
            console.log(name)
            console.log(login)
            console.log(bio)
    
            avatarUser.setAttribute('src', avatar_url)
            name != null ? nameUser.textContent = name : nameUser.textContent = 'Sem nome'
            loginUser.textContent = login
            bio != null ? bioUser.textContent = bio : bioUser.textContent = 'Sem bio'
            followersUser.textContent = `Seguidores: ${followers}`
            followingUser.textContent = `Seguindo: ${following}`
    
            containerAvatar.addEventListener('click', event => {
                avatarUserMax.style.animation = 'avatar-user-max-animation 1s forwards'
                avatarUserMax.style.display = 'flex'
                avatarUserMax.setAttribute('src', avatar_url)
            })
    
            container.addEventListener('click', event => {
                if (event.target.classList.contains('container')) {
                    console.log(event.target)
                    avatarUserMax.style.animation = 'avatar-user-max-animation-reverse 1s forwards'
                }
            })
            
            result.style.display = 'flex'
            result.style.animation = 'result-animation 0.5s forwards'
        })
        .catch(error => console.log(error))
    }
    
    setDataUser()
    
    containerAvatar.addEventListener('mousemove', event => {
        opacity.style.animation = 'animation-opacity 1s forwards'
    })
    
    containerAvatar.addEventListener('mouseleave', event => {
        opacity.style.animation = 'animation-opacity-reverse 0.8s forwards'
    })
    
})

const warning = document.querySelector('.warning')
window.addEventListener('load', event => {
    warning.style.animation = 'warning-animation 1s forwards'
    
    setTimeout(() => {
        warning.style.animation = ''
        warning.style.animation = 'warning-animation-reverse 1s forwards'
        setTimeout(() => {
            warning.style.display = 'none'
        }, 1000)
    }, 4800)
})



