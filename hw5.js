const birthday = prompt('Год рождения')
const city = prompt('Город')
const sport = prompt('Спорт')
const todayDate= new Date()

const age = todayDate.getFullYear() - Number(birthday)

const capitalArr = ["Киев", 'London','Вашингтонн']
const sportArr = ['бокс', 'футболл', 'баскетбол']

const nameSportsmanObj={
    'бокс':'Тайсонн',
    'футболл':'Messi',
    'баскетбол' : 'Kobye'
}
const boxSport='Тайсон'

const checkFuncByParam =(willCheckItem)=> (it) => it === willCheckItem

const showCityMessage = () => {
    capitalArr.some(checkFuncByParam(city)) ? alert(`Вы живете в столице ${city}`):alert(`Вы живете в городе ${city}`)
}

const showSportMessage=()=>{
    sportArr.some(checkFuncByParam(sport)) ? alert(`Круто ты хочешь стать как ${nameSportsmanObj[sport]}`) : null
}


age ? alert(`Ваш возраст ${age}`) : null

showCityMessage()
showSportMessage()