export const userSchema = {
    name:'users',
    title:'Users',
    type:'document',
    fields: [
        {
            name:'address',
            title:'Wallet Address',
            type:'string',
        },
        {
            name:'userName',
            title:'User Name',
            type:'string',
        },
        {
            name:'transaction',
            title:'Transaction',
            type:'array',
            of:[
                {
                    type:'reference',
                    to:[{type:'transactions'}],
                }
            ]
        }
    ]
}