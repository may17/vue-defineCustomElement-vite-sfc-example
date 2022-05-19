import { defineCustomElement } from "vue";
import StarWarsQuotes from "@/components/StarWarsQuotes.ce.vue";

const StarWarsQuotesElement = defineCustomElement(StarWarsQuotes);

customElements.define("starwars-quotes", StarWarsQuotesElement);
