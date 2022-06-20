import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import TestimonialCard from './testimonial';

export default function SwiperTestimonials() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        slidesPerView={3}
        spaceBetween={30}
        className='mySwiper'
        style={{
          width: '80vw'
        }}
      >
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Meriem'
            content='Un second voyage à Alger pour un retour sur mes racines. Tout autant que le premier voyage celui-ci s est très bien passé'
            image='https://i.pinimg.com/564x/5e/46/de/5e46de2cc3c337c1d5f385e6bb127ad3.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Ahmed'
            content='
            Voyage très intéressant et bien organisé à Alger. Un voyage à faire avec Voyageurs du Monde.'
            image='https://i.pinimg.com/474x/1f/cf/f4/1fcff4d1d1b3ebff859f2c36e66481f0.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Karim'
            content='Un voyage riche en émotions sur les traces de mes ancêtres et une équipe se mettant en 4 pour que mes recherches soient fructueuses. Merci'
            image='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEhASEhIQFRUVFhUVFRcWFRUVFRUVFxcXFhgVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysdHR0tKystLTAtLS0tLS0tLSstLS0tLS0tLSstKy0tLS0tKy0tLS0tKystLS0tLS0vLS0rLf/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIEAwUGBwj/xAA7EAABAwIDBgMHAgUEAwEAAAABAAIRAwQSITEFQVFhcYEGkcEHEyIyobHwUtFCYoLh8RQjM8IkcuIV/8QAGQEBAQADAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgIDAQADAAAAAAAAAAECEQMhMUEEEjJRcYHB/9oADAMBAAIRAxEAPwD1xCEIBCEIBCEIBCSEDSQhAIQkgaEkIJIUU0DQkhA0IQgEIQgEIQgEIQgEIQgEIQgEIQgEIQgEk0IEhCTiBmUDVPaO1Le3aX16tOm0b3OA8hqey5DxZ7QbekHUrZ7H1CCPeAzTp7pkfM7plz3Lyu6qe9c6o443uMkkw48xiEHsSeKD07aftTt25W1GpV/mdNNnb4S4+QWlqe1C9cfhpW7RGnxk9ZMfZcIym06TPAjPhvy13ZKLp3OPIajLgDoeRRXf0PaReSCRTidHU5HZzCDK6XZXtFtnkNrMdSP6mn3jO8DEPIrxgX53+e/p/n+yxuuzx/fzRH01a3VOq0PpvY9p0c0hw8wsy+dNj+Iq9B+Ok9zXD5o0eOY0d0K9g8G+M6V6MDoZXAzb/C8fqZP2RdOsSSQiGhJJBJCUolA0kpRKATlJCKcolRQglKFFCCaEIRAhCEAkhCAXlntc8Slrm2bHQ2A6rzJ+Vp5CJjiRwXqFV+EE8AT5Zr5l25dPuLmvVdq6o8nl8UAdBp2QMOY45OI6l0dlNzC0ay3i3ceI4HloqttYl3yyTy/yujsfCtYiSSPXqFjc5PLPHC5eI0VS4nrxG/dMdNR+BFznevoe3HguxtvB0nOV0uz/AAdRAzAWq809N+Pxsr5eVs2XUfJAP91VuLR7dV7xa7EpMbAaFqdq+FqT5MfQLGc/fbO/F66rxpgM5Lb+F7lzLmhhIB94yCSGiJzknLSV2lPwmxsyOmWi5B1mG1SOBIHZbMeSZeGnk4bhO30VTcCAQQZGo0PMFTXkXg7xU62eGVCTRcYcNcB/W3ucxvzXrbXAgEEEHMEaEcQtrQkkiUkDQkhFNJCEAhJCAQhJA0JIQZUJIRDQkhAIQkgoeILgU7W5ef4aNQ+TSvmY5ZL6Q8Yz/oL2NfcVfLAZ+kr5xotl4J4qVY9D8F7LaKYe4ZldnSayFz2xpbRYBvEre2LCV5+d3k9bixkxi83Cswcost1np0YUjZ0g26ad/wCdFjrPVprIWGvTHEJSWNdXfkei8o20cNV8cSe69VqsEwCDyledeOtnGnUFQD4Hy08jGS28F1lpz/Lx3juemlq3QIaR3/f6lez+zjaJr2NKTJpk0j0bBb9HAdl4Eyd+7/K9t9kVHDYYv11ajvKG/wDVdjzXcISQqgQhJA0JIRQhJCAlEpIQOUKKFBmQkhVDRKSEDlJJCDFeW4qU6lN2j2uYejgQfuvmqlbuFVtM648J/wDYGD6r6aXgV3Z4dqPpkHK6eQORxPH3Cxy8MsfLr3bUoUMLTmQB0EcVBvje2adCFqL+2plz3v0DogbzwC1F3c2WmFoduwhzh3dp5SuWYY307rnlPcjv7XxdSfGEq+dtg+S8utatPLCCOGsR3Xe+GrH3tMucdAVjnjI3cedy8q20vFlVoIYJOnfstGL/AGlXMAxPYd5VzbFsaZc5rZ1+m9c/WrXowuYwumcsBeW/0kQPJZ4d+Gvk3L3b/p0VDZ962MTgecz91dvbM16D6TjiMbxBBGYK0FrXvQWfBJOZwtwgZ6Fmhy3iF11hQcBjIIyzEEZ9FhnbKz45LPbx+pTLS9rtQSD1GRXuvsxeDs22jd7wHqKj5XlHiexP+sc1o/5MLmjm6AfqCvWPZvbe7sabJkh9TFyOLMBdeOUunnZcdm/5K6lCSFm1mkmkgEISRQhCSgEISJVAmkhBlQkmiAlCSEAmkhAFef8AjzZFNt3Y3TRDn1DTfz/23YXdciPJd/K0PjK3DqDXRnTq03jl8WE/RxWOXissfMcbf7GbVEEuAJJMb1qqvhlhwh0ENyEuIy4ZCSuz2aQW5q++gzkuGZ5Tp604scu65BuwaQbjw/EBDTmABEQBwXUeFaYazCqd5UBIYMydy2WxSGqbtvbP6yeIr3lo0v5TmqtTw+ycTSc90rbXkYsslr27XDDDx33KTcbNbm2a22Q0Rr3VmtRwhZKG0qZGRCqbRuwQlYuK8RNw3Vs8CfhqA9PxxXofhOnFE/zPc7zAXFXVEVK9uDMRUnsBH1heg7EpFtFgOpk+ZK6eLvKf4cPPdcdn9v8AxeQhC6XAJQhJAIlCSKEISQCSaSAQkmgyoSQiBCUolA0JIQBVXaVr72lUp/raRPAnQ+aslJQeavvXUiWnIgkHkQdFir+IHfKFm8XW2C4q8HQ8f1a/WVzNak4ZjOVx3GbelhyX69N7VuHBvvGn4xny6KhaeJqoJDwBnu9VR/8A12t+GpTqA7uB7hV6t3SJn3bgOc/eFlMP7GV5LfFbu52tXqkBlRzdNIM+e5bu3A91hcMU6zqSuV2ddOJijRc49C76mAFffe384A2mCdxw5czEpcWcyvm0q9WpQdLSSycxMx/ZbWndFwWvdYVWjFVc0k8GwPKVYY4TloFruqkt9t3sq2dUeGtw6SZ/TkDHPMLtmNAAA0AgdAuU8HmalQ8GR5uH7Lq5XTw46x24fkZ25a/iSCoyglbnOaSSEDQkhA0JIRQkmkgSEJoJShJCIaEkIHKEk0AoqSig5rxvs/HSFVozp/NzYf2P3K4GgAXQV7A9oIIIkHIjiOC828T7ENtUDmf8b5LeLY1afPIrRy4e3Rw8mulWrQBEEZ7itXV2hUoHMmNNJW2srkEQ5XzbW7xDgCtEy+vl2zvxXNUdvueQ1vvM9wAC6vZFmQMRbzM69ysdjZ2lIktYJP5vWxfftAjKEzy34Z47n6qvtCMJJ7LQe8jJWtq38mB2Wuo5lTGe61cmW707zwTT/wBuo7eXAdgP/orpQVznguq4tuGEfDTbTqNO+XmoHCeEMBXQArs4/wAxwcv6qaEkLNrOUkJIGhRRKCSFFNFNJCSAQhCgkhKUKocpyopoGhJCBpFTbTJ/IWO4rUqYxPeAPv0QJc747pA2zHHUVBh5/C6fRbajfOf8TWhlMaE5vf0n5RzXOe02u5ttaP41MR6OmPpCxz/NZ8f6jhzUISNw7c7903Z5qtWYuXe3XqxnF64b0zfOO9UqdNWqdLkrdLJQHOcZWysaearNpCFsbAFzmMYJc8hrRxJyCwyu/DZjh7rvvC9PBaV6n6pA5hjT6lyWyrvRjux9Fe2hQFvatotzwta2eLiZce/xFc/TeRouvGakjgzy+2Vrp0KhY3+IQ4d1ebB0/us2s5SQUkDlKUkIpgpyoolBJJJCBoSlJBNCUolENZG0ydypuuofhG4SVN1/zQXBSA+Y+ShVvabRkAtRcXpO9Un1CdSmxs7japOmapst/eHHUM8B+bljoN3lV6td1OoXMBLXfMOB0xD89UF+9ecmA5uIA3ZnID6qHtL2fjs3tA+RgcP6C0+iNjTWuqc6NJfG4QJB6zC6PbtEPpvGR+Ez9FL3Fx6rwqyqZBZ30ViNqab6jP0OLewOX0VwCQuK9V6M7imymrLG6IwFTYxS1lIHOAHFdr7MtlYi+8qDJsspdf4nD7dyuRsrN9erTosGb3AD1J5ASey9kp2jKFGnRpiA0Bo58SeZOfdbeHHd21fI5NY/We2h8SXEljZ1JefsPVaZyt7VdjqvI3fCD0yPaVgpieR3j83LqcLPbsy1GnkrPvHZOEghU61w2mJceQGpPIAalZLd5LQS0tncYkZ70G0t72QJVhrmnktMwwVYpPQbFzSksVO4jisvvWlAkKUA6HzUXAhASlKSSCUoUU0EpRKjKhXMMef5T9kRohdkueeMep9Uf6gdVqqdbM9B6j0TNTNRW1bU11TKrW7xkrmFEYH1eLo/Poq9V8/n3U3DM/nFYzuRVrZzyG1cJIJAEjXDvE9go+BmTdXjpyLMMbsnNHofNVjcOphzhnkcuKoeH61WkWVWagDENzgdQVGU8J+LdkGnX94PlqRPJwGXmB9CtW2gvTxb0Lxrgc2uYMssTHSYPIjd3XEXuzKlCoabxpoRo4bnBcvNjZdu74+cyn1vmNK+26pCitsaWSVChL2CJlwEDfmFp26LjrttNl7Oda0/fEltV4+Hixhzk8zl27ro7HbLqtA1HfMyWncC4RBjdMhVvEzfha0ZlxzPIf5C0tnd4RVt4PzNeTyzH3AXfjj9eo8vPL7d1k45pu04HceH7oAUwFm1o2NgGnE5znvjNztc9zRo0cgr5VYPgSd2cnhzVgOnigxkrIxY3NCQPRBYa9ZGuVD3mn55qbLgQgue+iFiq38E5jIfn5zVC4vMIJ1O4cSdAFrriphhup/i66n65dAorqLO4xtDuoWYla7YdQGn0OfkFsFUOUKKEVNRqCQRxEeaaRKjFwVbE0iYyxNnpmJG4/MpMOajfGXVepeOxz65SlRMoq7TqELZUK2S1LSrNFyosu1PQeqiNUNfn2RO9RGK4Hwkcj6rYWViAwdAqThI6rqKNDIdAkVRtrmrQxe7w56gic1YuKgvKeF4a2q35CPlJ/SZ0n9lcfZAqLLBrTiPynJ3LgVLjuaZY5fW7ji3OIOGDIOEiM8UxhjjO5dPsuzpW2F9cn3rhk0CSwfusrtnU21nVhnUiMW5pEguaP1EQCeSwvtCX/ndaePhmN3XRy/Juc1OlhxbUIIBwtECdTzOvLyWgr0x7x5jX0XSupYGLm4lxPEyuhzAMlNgIymVJvqolEKo/NrOOZ6D+8BXWP8Az0WsoOlz3f0jhA1+s+SvtqZKjMVUqP5BBuBmqtaqCUGR9RYH14lY3vOaq1quSCw2sC+To0Yu+jcvM9lSxlziSfNQNT4Jz+Iz20H0z7pMdGWSlWN54crkVHMO8ZdR+FdFK5PZpivRO52XeIK6oqFOUkkIJysdw6GuPAH7KaqbUfFJ/SPNEcXVJL3HhP1RYuyjt5Zeiz1WhrHOOrshzVGyf8TxwM+f+Cg2U/2WVhMrE0ZrKAZ+ios0wcTeh9FkhVmu+Jv5uKtA6/n5qgjGi7MNiFxo1HVdo/ckFgjJQZJkLI/ROzAzJ4oMVKyzJOXqnTogElXg7VVKzoag1G2a0Nce3nkueYVtNuv+Fo4mew/ytU3cgzNngq93Vwtc7gMuZOnfRWGv3qncDE5jc9cR6DT6/ZUSt6eFjRyE6a71N78kZgb1Wqk70EHv4FYsSm4c1icckEi9UL15+Ub8h33rO+p+aKnixPJ4D6nL7T5oJuzIG4fYZLKMliAzUxJ3qK2eyIc+n/K8OHSM/RdSVwtvVNNzXA6ELtresHta4bxKhWRCUpqgBWv2zmxreLh5AEq8tT4jq4afPMef4VKjl76vjflo3IdAtbYVf/ILeII67/3V4U8LC7itGypF1RP6nR55eqDrWFZdFhp6rKXqga7MHmPz6q7iVSoMvqrAOmaCYMFdu/RcNK7gnIdAkFirostkPh7lYa2iyWxhoQZq4gE8lQvHZAK5cP8Ah8lrrp3xIOd21UmpG5oA76+qpByjcV8T3O4uJ7blDNBna7866qrbV5L3c4HQZfeVDaVxgpkgZ6DLOTkIVOg6GgREZZyqNm64GixVXcwqmLm3zCjUqHdh8wfsgzVCFhe7LuqdQvJ+dscgSfLJZG1MoJJjjxQRrPhVrV/zcyfLT0Rd1QA7Pdkp2jYaByRWamVkyWOVNA6jcl0nhytNKP0n6H8K0DM5HJbDwhP+8OGH/ssVdIhRlNVH/9k='
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Wael'
            content="les guides locaux étaient soit jeunes et nous ont communiqué leur amour de leur pays et fait sentir le climat et l'ambiance."
            image='https://img.freepik.com/photos-gratuite/confident-business-team-leader_1098-3228.jpg?size=626&ext=jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Meriem'
            content='Un second voyage à Alger pour un retour sur mes racines. Tout autant que le premier voyage celui-ci s est très bien passé'
            image='https://i.pinimg.com/564x/5e/46/de/5e46de2cc3c337c1d5f385e6bb127ad3.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Ahmed'
            content='
            Voyage très intéressant et bien organisé à Alger. Un voyage à faire avec Voyageurs du Monde.'
            image='https://i.pinimg.com/474x/1f/cf/f4/1fcff4d1d1b3ebff859f2c36e66481f0.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Karim'
            content='Un voyage riche en émotions sur les traces de mes ancêtres et une équipe se mettant en 4 pour que mes recherches soient fructueuses. Merci'
            image='data:image/jpeg;base64,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'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Wael'
            content="les guides locaux étaient soit jeunes et nous ont communiqué leur amour de leur pays et fait sentir le climat et l'ambiance."
            image='https://img.freepik.com/photos-gratuite/confident-business-team-leader_1098-3228.jpg?size=626&ext=jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Meriem'
            content='Un second voyage à Alger pour un retour sur mes racines. Tout autant que le premier voyage celui-ci s est très bien passé'
            image='https://i.pinimg.com/564x/5e/46/de/5e46de2cc3c337c1d5f385e6bb127ad3.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Ahmed'
            content='
            Voyage très intéressant et bien organisé à Alger. Un voyage à faire avec Voyageurs du Monde.'
            image='https://i.pinimg.com/474x/1f/cf/f4/1fcff4d1d1b3ebff859f2c36e66481f0.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Karim'
            content='Un voyage riche en émotions sur les traces de mes ancêtres et une équipe se mettant en 4 pour que mes recherches soient fructueuses. Merci'
            image='data:image/jpeg;base64,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'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Wael'
            content="les guides locaux étaient soit jeunes et nous ont communiqué leur amour de leur pays et fait sentir le climat et l'ambiance."
            image='https://img.freepik.com/photos-gratuite/confident-business-team-leader_1098-3228.jpg?size=626&ext=jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Meriem'
            content='Un second voyage à Alger pour un retour sur mes racines. Tout autant que le premier voyage celui-ci s est très bien passé'
            image='https://i.pinimg.com/564x/5e/46/de/5e46de2cc3c337c1d5f385e6bb127ad3.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Ahmed'
            content='
            Voyage très intéressant et bien organisé à Alger. Un voyage à faire avec Voyageurs du Monde.'
            image='https://i.pinimg.com/474x/1f/cf/f4/1fcff4d1d1b3ebff859f2c36e66481f0.jpg'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Karim'
            content='Un voyage riche en émotions sur les traces de mes ancêtres et une équipe se mettant en 4 pour que mes recherches soient fructueuses. Merci'
            image='data:image/jpeg;base64,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'
            project=''
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <TestimonialCard
            name='-Wael'
            content="les guides locaux étaient soit jeunes et nous ont communiqué leur amour de leur pays et fait sentir le climat et l'ambiance."
            image='https://img.freepik.com/photos-gratuite/confident-business-team-leader_1098-3228.jpg?size=626&ext=jpg'
            project=''
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
