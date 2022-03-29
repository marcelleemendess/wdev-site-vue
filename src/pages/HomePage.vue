<template>
    <main>
        <div class="text-top"> Vídeos novos todos os <b>dias</b> às <b>20h</b></div>
        <a href="http://youtube.com" target="_blank">
            <img 
                alt="Increva-se" 
                id="subscribe" 
                src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg">
        </a>
        <div class="text-bottom">youtube.com</div>
    </main>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
    main { 
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top { 
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 20px;
    }

    #subscribe { 
        width: 340px;
    }

    .text-bottom{
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }

    @media (min-width:700px) {
        #subscribe {
            width: 370px;
        }
    }
</style>