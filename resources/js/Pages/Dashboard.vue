<!--suppress ALL -->
<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
</script>

<script>
export default {
    name: 'locale-changer',
    data() {
        return {langs: ['ar', 'en']}
    }
}
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard {{ $t('Dashboard') }}
                <div class="locale-changer">
                    <select v-model="$i18n.locale">
                      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                        {{ lang }}
                      </option>
                    </select>
                  </div>
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Welcome/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
