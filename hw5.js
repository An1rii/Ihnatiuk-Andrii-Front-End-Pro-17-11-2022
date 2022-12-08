const birthday = prompt('Год рождения')
const city = prompt('Город')
const sport = prompt('Спорт')
const todayDate= new Date()

const age = todayDate.getFullYear() - Number(birthday)

const capitalArr = ["Киев", 'London','Вашингтонн']
const sportArr = ['бокс', 'футбол', 'баскетбол']

const nameSportsmanObj={
    'бокс':'Тайсон',
    'футбол':'Messi',
    'баскетбол':'Kobie'
}

const checkFuncByParam =(willCheckItem)=> (it) => it === willCheckItem

const showCityMessage = () => {
    capitalArr.some(checkFuncByParam(city)) ? alert(`Ти живеш у столиці ${city}`):alert(`Ти живеш у місті ${city}`)
}

const showSportMessage=()=>{
    sportArr.some(checkFuncByParam(sport)) ? alert(`Круто! Хочеш стати ${nameSportsmanObj[sport]}`) : null
}


age ? alert(`Ваш возраст ${age}`) : null

showCityMessage()
showSportMessage()