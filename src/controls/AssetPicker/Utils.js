import * as PAGINATIONS from '../../constants/paginations';
import * as AJAX from '../../constants/ajax';
import * as QUERY_OPTIONS from '../../constants/queryOptions';

import fetch from '../../core/fetch';
import {
    isEmptyObject,
    fetchJson
} from '../../helper/commonHelper';

import {
    fromJS
} from 'immutable';

export async function filterArtworks(options={}){
    let {filters={}, pagination={}, } = options;
    let { keywords = "", tags=[], creators=[], isBelongToCollection= false } = filters;
    let {page = 1, page_size = PAGINATIONS.ARTWORK_FILTER_PER_PAGE} = pagination
    
    let queryOptions = {
        "filters" : {
            "keywords": keywords,
            "tags": tags,
            "creators": creators,
            "isBelongToCollection": isBelongToCollection
        },
        "pagination": {
            "page": page,
            "page_size": page_size,
        },
    } 
 
    let results = await fetchJson(AJAX.AJAX_GET_ARTWORK_FILTER_LIST, {
        method: 'put',
        body: queryOptions
    })

    if (!results || (results && results.code != 0) ) {
        return {};
    }
    let artworks = [];
    if(results && results.data && results.data.results && results.data.results.length > 0){
        let resusltArtworks = results.data.results;
        resusltArtworks.forEach( item=>{
            let artwork   = {};
            artwork.artwork_id          = item.artwork_id;
            artwork.artwork_name        = item.artwork_name;
            artwork.artwork_url         = item.artwork_url || "";
            artwork.thumbnail_url       = item.thumbnail_url || "";

            artworks.push(artwork); 
        })
    }
    let data = {
        artworks: artworks,
        pagination: results.data && results.data.pagination || {}
    }
    return data;
 }


 export async function getTagsMentions() {
    let tagData = [];
    let results = await fetchJson(AJAX.AJAX_GET_TAG_FILTER, {
        method: 'put',
        body: QUERY_OPTIONS.tagFilterOptions
    })

    if (!results || (results && results.code != 0) ){
        return [];
    }

    if (results.data && results.data.results && results.data.results.length > 0) {
        results.data.results.forEach((item) => {
            tagData.push({
                name: item.tag_name,
            });
        })
    }

    return fromJS(tagData);
}

export async function getCreatorMentions() {
    let userData = [];
    let result = await fetchJson(AJAX.AJAX_GET_CREATOR_FILTER, {
        method: 'put',
        body: {
            "keyword": " "
        },
    })

    if (!result) {
        return;
    }

    if (result.data && result.data.length > 0) {
        result.data.forEach((item) => {
            let user = {
                name: item.fullName,
                objectId: item.objectId,
                // avatar: item.url,
                id: item.objectId
            };
            userData.push(user);
        })
    }
    return fromJS(userData);
}