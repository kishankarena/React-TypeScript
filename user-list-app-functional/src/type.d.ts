interface Data{
    image:string,
    name:string,
    email:string,
    isVisible?:boolean
}

interface InitialState {
user: Data
}

interface DataAction{
    type:string,
    payload:Data
}