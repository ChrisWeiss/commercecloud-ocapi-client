/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient'
import Promotion from '../models/Promotion'
import PromotionResult from '../models/PromotionResult'

/**
 * Promotions service.
 * @module api/PromotionsApi
 * @version 17.8
 */
export default class PromotionsApi {

    /**
     * Constructs a new PromotionsApi.
     * @alias module:api/PromotionsApi
     * @class
     * @param {module:ApiClient} apiClient Optional API client implementation to use,
     * default to {@link module:ApiClient#instance} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance
    }

    /**
     * Handles get promotion by filter criteria Returns an array of enabled promotions matching specified
     * filter  criteria. In the request URL, you must provide a campaign_id parameter, and you can
     * optionally specify a date  range by providing start_date and end_date parameters. Both parameters
     * are required to specify a date range:  omitting one causes the server to return a
     * MissingParameterException fault. Each request returns only enabled  promotions; the
     * server does not consider promotion qualifiers or schedules.
     * @param {String} campaignId Find the promotions assigned to this campaign (mandatory)
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate The start date of the promotion in ISO8601 date time format: yyyy-MM-dd&#39;T&#39;HH:mmZ
     * @param {String} opts.endDate The end date of the promotion in ISO8601 date time format: yyyy-MM-dd&#39;T&#39;HH:mmZ
     * @param {String} opts.currency The currency mnemonic specified for price
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/PromotionResult} and HTTP response
     */
    getPromotionsWithHttpInfo(campaignId, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'campaignId' is set
        if (campaignId === undefined || campaignId === null) {
            throw new Error('Missing the required parameter \'campaignId\' when calling getPromotions')
        }

        const pathParams = {}
        const queryParams = {
            campaign_id: campaignId,
            start_date: opts.startDate,
            end_date: opts.endDate,
            currency: opts.currency
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = PromotionResult

        return this.apiClient.callApi(
            '/promotions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Handles get promotion by filter criteria Returns an array of enabled promotions matching
     * specified filter  criteria. In the request URL, you must provide a campaign_id parameter,
     * and you can optionally specify a date  range by providing start_date and end_date parameters.
     * Both parameters are required to specify a date range:  omitting one causes the server
     * to return a MissingParameterException fault. Each request returns only enabled  promotions;
     * the server does not consider promotion qualifiers or schedules.
     * @param {String} campaignId Find the promotions assigned to this campaign (mandatory)
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate The start date of the promotion in ISO8601 date time format: yyyy-MM-dd&#39;T&#39;HH:mmZ
     * @param {String} opts.endDate The end date of the promotion in ISO8601 date time format: yyyy-MM-dd&#39;T&#39;HH:mmZ
     * @param {String} opts.currency The currency mnemonic specified for price
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/PromotionResult}
     */
    getPromotions(campaignId, opts) {
        return this.getPromotionsWithHttpInfo(campaignId, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * Returns an enabled promotion using a specified id. Each request returns a response only
     * for an enabled promotion;  the server does not consider promotion qualifiers or schedules.
     * @param {String} id The id of the requested promotion.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/Promotion} and HTTP response
     */
    getPromotionsByIDWithHttpInfo(id, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'id' is set
        if (id === undefined || id === null) {
            throw new Error('Missing the required parameter \'id\' when calling getPromotionsByID')
        }

        const pathParams = {
            id
        }
        const queryParams = {
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = Promotion

        return this.apiClient.callApi(
            '/promotions/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * Returns an enabled promotion using a specified id. Each request returns a response
     * only for an enabled promotion;  the server does not consider promotion qualifiers or schedules.
     * @param {String} id The id of the requested promotion.
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/Promotion}
     */
    getPromotionsByID(id, opts) {
        return this.getPromotionsByIDWithHttpInfo(id, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }

    /**
     * @param {Array.<String>} ids
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:models/PromotionResult} and HTTP response
     */
    getPromotionsByIDsWithHttpInfo(ids, opts) {
        opts = opts || {}
        const postBody = null

        // verify the required parameter 'ids' is set
        if (ids === undefined || ids === null) {
            throw new Error('Missing the required parameter \'ids\' when calling getPromotionsByIDs')
        }

        const pathParams = {
            ids
        }
        const queryParams = {
            locale: opts.locale
        }
        const headerParams = {}
        const formParams = {}

        const authNames = ['client_id', 'customers_auth']
        const contentTypes = ['application/json', 'text/xml', 'application/xml']
        const accepts = ['application/json', 'text/xml', 'application/xml']
        const returnType = PromotionResult

        return this.apiClient.callApi(
            '/promotions/({ids})', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        )
    }

    /**
     * @param {Array.<String>} ids
     * @param {Object} opts Optional parameters
     * @param {String} opts.locale
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:models/PromotionResult}
     */
    getPromotionsByIDs(ids, opts) {
        return this.getPromotionsByIDsWithHttpInfo(ids, opts)
            .then((response_and_data) => {
                return response_and_data.data
            })
    }
}
