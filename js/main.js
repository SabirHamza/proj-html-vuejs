const {createApp} = Vue

const app = createApp ({
    data (){
        return{
            services: [
                {
                    img: './img/Group-247.png',
                    type: 'Data Analysis',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface'
                },
                {
                    img: './img/Group-567.png',
                    type: 'SEO Optimization',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface'
                },
                {
                    img: './img/Group-538.png',
                    type: 'Security Data',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface'
                },
                {
                    img: './img/Group-566.png',
                    type: 'Branding Strategy',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface'
                }
            ],

            works: [
                {
                    img: './img/8wa60okr-1-790x576.jpg',
                    text: 'Basket of flower on table',
                    type: 'Digital Strategy'
                },
                {
                    img: './img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
                    text: 'Purinky Product',
                    type: 'Digital Strategy'
                },
                {
                    img: './img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
                    text: 'Satisfy Poster',
                    type: 'Digital Strategy'
                }
            ],

            review: [
                {
                    img: './img/philipe-cavalcante-539505-unsplash-1024x1024.png',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface',
                    client: 'Michekl Anegel',
                    rule: 'Marketing Management'
                },
                {
                    img: './img/szabo-viktor-1266895-unsplash-1024x1024.png',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface',
                    client: 'Michekl Anegel',
                    rule: 'Marketing Management'
                },
                {
                    img: './img/fabio-spinelli-695744-unsplash-1024x1024.png',
                    text: 'when, while the lovely valley teems whit vapour around meand the meridian sun strikes the upper surface',
                    client: 'Michekl Anegel',
                    rule: 'Marketing Management'
                }
            ],

            partners: [
                './img/client-1-1.png',
                './img/client-5.png',
                './img/clienty-2.png',
                './img/clienty-3.png',
                './img/clienty-4.png'
            ]
        }
    }
})

app.mount('#root')