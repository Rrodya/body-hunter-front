import {Component, Vue, Prop} from "vue-property-decorator";

@Component
export default class VInput extends Vue {
    @Prop({
        type: String,
        required: false,
        default: ''
    }) readonly placeHold: string | undefined;
    @Prop({
        type: String,
        required: false,
        default: 'text'
    }) readonly type: string | undefined
    @Prop({
        type: String,
        required: true,
    }) value: string | undefined;
}
