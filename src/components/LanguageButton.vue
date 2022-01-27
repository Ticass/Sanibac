
<template>
    <button @click="changeLocale()"> {{ $t("message.langue") }}</button>
</template>


<script setup>
import { useI18n } from "vue-i18n" 
const { locale } = useI18n({
    useScope: "global"
}); 
const changeLocale = () => {
            const currentGlobal = locale.value;
            if (currentGlobal == "fr"){
                locale.value = "en"
            } else {
                locale.value = "fr"
            }
}

</script>