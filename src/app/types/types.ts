import { DateValueType } from 'react-tailwindcss-datepicker';

export interface ProfileFormState {
	first_name?: string;
	last_name?: string;
	date?: string | DateValueType;
	postcode?: string;
	address_line_1?: string;
	town?: string;
	mobile?: string;
	gender?: string;
	profile_image_url?: string;
}
