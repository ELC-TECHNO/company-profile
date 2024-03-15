<template> 
    <div class="faq">
        <div class="faq__wrapper">
            <div class="faq__title">
                <h1>F.A.Q</h1>
            </div>
            <div class="faq__content">
                <div class="faq__content__card">
                    <div class="faq__content__card__wrapper">
                        <CommonCard v-for="items in listFaq" :key="items.id"  @click="toogleCategory(items)" :class="{ 'active': selectedCategory === items}"> {{ items.name }}</CommonCard>
                    </div>
                </div>
                <div class="faq__content__qna">
                    <div class="faq__content__qna__wrapper">
                        <div class="faq__content__qna__title" v-html="selectedCategory?.name" />
                        <div v-for="(data, index) in selectedCategory.data" :key="index">
                            <div class="faq__content__qna__field">
                                <div class="faq__content__qna__field__question">
                                    Q : {{data.question}}
                                </div>
                                <div class="faq__content__qna__field__answer">
                                    A : {{data.answer}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="faq__another">
                <div class="faq__another__content">
                    <div class="faq__another__content__image">
                        <img src="/assets/img/another-question.svg"/>
                    </div>
                </div>
                <div class="faq__another__field">
                    <div class="faq__another__field__wrapper">
                        <div class="faq__another__field__input">
                            <input type="text" placeholder="Nama" id="nama" name="nama" class="faq__another__field__name">
                            <input type="text" placeholder="Email" id="nama" name="nama" class="faq__another__field__email">
                            <input type="text" placeholder="Subject" id="nama" name="nama" class="faq__another__field__subject">
                            <input type="text" placeholder="Pesan" id="nama" name="nama" class="faq__another__field__message">
                        </div>
                        <div class="faq__another__field__button">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default defineNuxtComponent({

    setup() {

        const listFaq = ref([
            {
                id: 1,
                name: "Produk",
                category: "products",
                data: [
                    {
                        question: "Apa itu ELC?",
                        answer: "ELC adalah"
                    },
                    {
                        question: "Apa itu ELC?",
                        answer: "ELC adalah"
                    }
                ]
            },
            {
                id: 2,
                name: "Pendaftaran",
                image: "registration",
                data: [
                    {
                        question: "Apa itu Pendafatarn?",
                        answer: "ELC adalah"
                    },
                    {
                        question: "Apa itu Pendaftaran?",
                        answer: "ELC adalah"
                    }
                ]
            },
            {
                id: 3,
                name: "Biaya",
                image: "price",
                data: [
                    {
                        question: "Apa itu Biaya?",
                        answer: "ELC adalah"
                    },
                    {
                        question: "Apa itu Biaya?",
                        answer: "ELC adalah"
                    }
                ]
            },
        ])

        const selectedCategory = ref(listFaq.value[0])

        const toogleCategory = (index: any) => {
            selectedCategory.value = index;
            console.log(selectedCategory.value)
            question.value = index;
            console.log(question.value)
        }

        const question = ref(listFaq.value[0])

        return {
            listFaq,
            toogleCategory,
            selectedCategory,
            question
        }

    }

})
</script>

<style lang="scss" scoped>

.faq {
    padding: 5% 10%;

    &__wrapper {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 40px;
    }

    &__content {
        display: grid;
        grid-template-columns: 30% 65%;
        gap: 5%;
        

        &__qna {
            
            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }

            &__field{  
                display: flex;
                flex-direction: column;
                gap: 10px;

                &__answer {
                    border: 1px solid $primary;
                    padding: 5px;
                    height: 163px;
                    border-radius: 5px;
                }
            }
        }

        &__card {
            
            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 10px;

                :deep(.card) {
                    min-height: 20px !important;
                    height: 20px !important;
                }
            }
            
        }
    }

    &__another {
        display: grid;
        grid-template-columns: 45% 50%;
        gap: 5%;
        
        &__content {
            
            img {
                width: 100%;
                height: 100%;
            }
        }

        &__field {
            
            &__wrapper {
                display: flex;
                flex-direction: column;
                gap: 10px;
                
            }

            &__input {
                display: flex;
                flex-direction: column;
                gap: 10px;

                input::placeholder {
                    padding: 5px;
                    padding-top: 5px;
                }
            }

            &__name {
                height: 40px;
            }

            &__email {
                height: 40px;
            }

            &__subject {
                height: 40px;
            }

            &__message {
                height: 180px;
            }

            &__button {
                
                button {
                    padding: 3% 8%;
                    border-radius: 5px;
                    border: none;
                    background: $primary;
                    width: 100%;
                    color: #ffffff;
                    cursor: pointer;
                }
            }
            
        }
    }

    .card {
        background: transparent;
        border: 1px solid $primary;
        color: #000000;
        width: 100%;
    }

    .active {
        background: $primary;
        border: 1px solid $primary;
        color: #ffffff;
    }
}
</style>
