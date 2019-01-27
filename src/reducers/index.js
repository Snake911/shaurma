export const initialState = {
    points: [
        {
            id: 1,
            name: "Русский гриль",
            adress: "Нижний Тагил, ул. Циолковского 39",
            minPrice: 80,
            logo: "https://pp.userapi.com/c639625/v639625408/2b81f/UDj2_2EUt7s.jpg?ava=1",
            text: "Русский гриль",
            moreText: "Русский гриль Русский гриль Русский гриль Русский гриль"
        },
        {
            id: 2,
            name: "Русский гриль",
            adress: "Нижний Тагил, пр. Уральский 40а",
            minPrice: 80,
            logo: "https://pp.userapi.com/c639625/v639625408/2b81f/UDj2_2EUt7s.jpg?ava=1",
            text: "Русский гриль",
            moreText: "Русский гриль Русский гриль Русский гриль Русский гриль"
        },
        {
            id: 3,
            name: "Русский гриль",
            adress: "Нижний Тагил, пр. Ленинградский 140а",
            minPrice: 80,
            logo: "https://pp.userapi.com/c639625/v639625408/2b81f/UDj2_2EUt7s.jpg?ava=1",
            text: "Русский гриль",
            moreText: "Русский гриль Русский гриль Русский гриль Русский гриль"
        },
        {
            id: 4,
            name: "Русский гриль",
            adress: "Нижний Тагил, ул. Фрунзе 37б",
            minPrice: 80,
            logo: "https://pp.userapi.com/c639625/v639625408/2b81f/UDj2_2EUt7s.jpg?ava=1",
            text: "Русский гриль",
            moreText: "Русский гриль Русский гриль Русский гриль Русский гриль"
        }
    ]
}
export function rootReducer(state = initialState) {
    return state;
}