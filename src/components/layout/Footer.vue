<template>
  <div>
        <div class="bg-primary p-4 xl:p-8 2xl:p-8">
            <div class="grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 2xl:grid-cols-6 gap-8 max-w-7xl mx-auto footer-items">
                <div class="flex flex-col justify-items-start">
                    <span class="font-bold text-white">Products</span>
                    <router-link class="text-base font-light text-white cursor-pointer" to="nabu" @click.native="$scrollToTop">Modak Nabu™</router-link>
                </div>
                <div class="flex flex-col justify-items-start">
                    <span class="font-bold text-white">Solutions</span>
                    <router-link to="managed-dataops" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Managed DataOps</router-link>
                    <router-link to="data-fabric" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Data Fabric</router-link>
                    <router-link to="governed-datalake" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Governed data lake</router-link>
                    <router-link to="active-metadata-catalog" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Metaprogramming</router-link>
                    <router-link to="hadoop-managed-services" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Hadoop managed services</router-link>
                    <router-link to="data-migration" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Data migration</router-link>
                    <router-link to="data-fingerprinting" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Data Fingerprinting</router-link>
                </div>
                <div class="flex flex-col justify-items-start">
                    <span class="font-bold text-white">Our Company</span>
                    <router-link to="life-modak" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Team</router-link>
                    <router-link to="work-culture" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Work culture</router-link>
                    <router-link to="contact-us" @click.native="$scrollToTop" class="text-base font-light text-white cursor-pointer">Contact us</router-link>
                </div>
                <div class="flex flex-col justify-items-start text-center">
                    <a class="font-bold text-white">USA</a>
                    <a class="text-base font-light text-white">21660 W Field Parkway,</a>
                    <a class="text-base font-light text-white">Deer Park, IL – 60010,</a>
                    <a class="text-base font-light text-white">USA</a>
                </div>
                <div class="flex flex-col justify-items-start text-center">
                    <a class="font-bold text-white">UAE</a>
                    <a class="text-base font-light text-white">Dubai Silicon Oasis(DSO),</a>
                    <a class="text-base font-light text-white">Dubai, UAE</a>
                </div>
                <div class="flex flex-col justify-items-start text-center">
                    <a class="font-bold text-white">India</a>
                    <a class="text-base font-light text-white">The Platina,</a>
                    <a class="text-base font-light text-white">Gachibowli, Hyderabad</a>
                    <a class="text-base font-light text-white"> India</a>
                </div>
            </div>
            <div class="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-row justify-center items-center max-w-7xl mx-auto my-4">
                <img src="img/logos/gartner.png" alt="" class="mr-8" />
                <img src="img/logos/strata.png" alt="" class="mr-8" />
            </div>
            <div class="md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-row justify-center items-center max-w-7xl mx-auto xs:my-2 xl:my-4 2xl:my-4">
                <a href="https://twitter.com/ModakAnalytics" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/twitter.png" alt="" /></a>
                <a href="https://www.facebook.com/Modak-Analytics-684532614917623/" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/company/modak-analytics/about/" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/linkedin.png" alt="" /></a>
                <a href="https://github.com/modakanalytics" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/github.png" alt="" /></a>
            </div>
            <div class="xs:hidden sm:hidden flex flex-row justify-end items-center max-w-7xl mx-auto my-4">
                <img src="img/logos/gartner-white.png" alt="" class="mr-8 h-8 cursor-pointer" />
                <img src="img/logos/strata.png" alt="" class="mr-8 cursor-pointer" />
                <a href="https://twitter.com/ModakAnalytics" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/twitter.png" alt="" /></a>
                <a href="https://www.facebook.com/Modak-Analytics-684532614917623/" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/facebook.png" alt="" /></a>
                <a href="https://www.linkedin.com/company/modak-analytics/about/" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/linkedin.png" alt="" /></a>
                <a href="https://github.com/modakanalytics" class="mr-4 cursor-pointer" target="_blank"><img src="img/logos/github.png" alt="" /></a>
            </div>
        </div>
    <div class="bg-primary pt-4 pb-8">
        <div class="max-w-7xl mx-auto flex lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center xs:flex-col">
            <div class="text-white copyright font-light xs:text-center">&#9400;2020 Modak Analytics. An ISO 9001 & 27001 company. All Rights Reserved.</div>
            <div class="xs:my-2">
                <a class="font-normal footer-links">
                    <router-link to="/terms" @click.native="$scrollToTop" class="mr-4 text-white no-underline">Terms of use</router-link>
                    <router-link to="/privacy-policy" @click.native="$scrollToTop" class="mr-4">Privacy policy</router-link>
                    <router-link to="/disclaimer" @click.native="$scrollToTop" class="mr-4">Disclaimer</router-link>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
a {
    color: #fff !important;
}
a:hover {
    text-decoration: none;
}
.footer-links a {
    color: #fff !important;
    font-weight: 300 !important;
    font-size: 0.9rem;
}
footer-links .a:hover {
    color: #fff !important;
    text-decoration: none !important;
}
.copyright {
    font-size: 0.8rem;
}
</style>