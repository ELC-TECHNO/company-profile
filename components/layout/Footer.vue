<template>
    <div class="footer">
        <hr />
        <div class="footer__wrapper">
            <div class="footer__logo">
                <img src="/footer/logo.png" />
            </div>
            <div class="footer__content">
                <div class="footer__content__company">
                    <div class="footer__content__company__address">
                        <h5>Alamat</h5>
                        <span>Jl. jendral sudirman</span>
                    </div>
                    <div class="footer__content__company__contact">
                        <h5>Contact</h5>
                        <span>Elc.techno@gmail.com</span>
                        <br />
                        <span>+62 812-5181-9685</span>
                    </div>
                </div>
                <div class="footer__content__services">
                    <h5>Layanan</h5>
                    <span>Payment</span>
                    <span>Order Online</span>
                    <span>Table Management</span>
                </div>
                <div class="footer__content__bisnis">
                    <h5>Services</h5>
                    <span>Restaurant</span>
                    <span>Coffeshop</span>
                    <span>Hotel</span>
                    <span>Sports</span>
                </div>
                <div class="footer__content__about">
                    <h5>About</h5>
                    <span>Informasi Perusahaan</span>
                    <span>Support</span>
                </div>
                <div class="footer__content__socialmedia">
                        <span><Icon name="mdi:instagram" /></span>
                        <span><Icon name="mdi:linkedin" /></span>
                        <span><Icon name="mdi:twitter" /></span>
                        <span><Icon name="mdi:youtube" /></span>
                </div>
            </div>
            <hr />
            <div class="footer__copyright">
                <p class="footer__copyright">© Copyright 2024 PT ELC Teknologi Indonesia. All Rights Reserved.</p>
            </div>
        </div>
        <hr />
    </div>
</template>

<style lang="scss" scoped>

.footer {

    &__wrapper {
        padding: 5% 5%;

        span {
            cursor: pointer;
        }

        hr {
            margin-top: 30px;
        }

        @media (min-width: 1023px) {
            padding: 5% 20%;
        }

    }

    &__logo {

    }

    &__content {
        
        margin-top: 30px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        h5 {
            font-size: 15px;
        }

        &__company {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;

            span {
                font-size: 12px;
            }

        }

        &__services {
            display: flex;
            flex-direction: column;
            gap: 10px;
            grid-row: 2;

             span {
                font-size: 12px;
            }
        }

        &__bisnis {
            display: flex;
            flex-direction: column;
            gap: 10px;
            grid-row: 2;

            span {
                font-size: 12px;
            }
        }

        &__about {
            display: flex;
            flex-direction: column;
            gap: 10px;
            grid-row: 3;

            span {
                font-size: 12px;
            }
        }

        &__socialmedia {

            grid-row: 4;
            display: flex;
            gap: 5px;

            span {
                font-size: 25px;
            }
                
        }

        @media (min-width: 1023px) {

             grid-template-columns: repeat(4, 1fr);
             gap: 5%;

            &__company {
                grid-row: 1;
            }

            &__services {
                grid-row: 1;
            }

            &__bisnis {
                grid-row: 1;
            }

            &__about {
                grid-row: 1;
            }

            &__socialmedia {
                grid-row: 1;
            }

        }

    }

    &__copyright {
        text-align: center;
        padding-top: 1%;

        p {
            font-size: 10px;
        }

    }

}

</style>