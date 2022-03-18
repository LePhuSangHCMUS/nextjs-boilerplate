import { Api } from "@Configs/api/api";
import apiConfig from "@Configs/api/api.config";
import { IUserProfile } from "@Interfaces/user";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

//API ENDPOINT
// localhost:8000
 const API_REVALIDATE="http://localhost:3000/api/revalidate"
//===============================================
class BaseApi extends Api {
    public constructor (config: AxiosRequestConfig) {
        super(config);
        this.revalidate = this.revalidate.bind(this);
    }

    /**
     *
     * @param {object} credentials - user's identifications.
     * @param {string} credentials.email - user's email.
     * @param {string} credentials.password - user's password.
     * @returns {Promise<UserState>} userState - user information,
     */
    public revalidate (): Promise<any > {

        return this.get<any>(API_REVALIDATE)
            .then((response: AxiosResponse<IUserProfile>) => {
                const { data } = response;
                const state: any = {
                    data
                };

                return state;
            })
            .catch((error: AxiosError) => {
                throw error;
            });
    }

}

const baseApi = new BaseApi(apiConfig);
export default baseApi