import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {serverUrl} from "../config";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJtaWhhaWxAZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Im1paGFpbCIsImp0aSI6IjY1YWE0Zjg5LWRlYmUtNGE2NS1hZWMwLWFhNjdkNmE1MTYxMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2NjczNTM1NDYsImlzcyI6Ikl0Rm9ydW1TZXJ2ZXIiLCJhdWQiOiJJdEZvcnVtUmVhY3RDbGllbnQifQ.tcbc9jmh5ldQapH_VOaTUtPiNC5xOFrkuGot4hsEDSM";

export const topicAPI = createApi({
    reducerPath: 'topicAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: serverUrl, prepareHeaders: (headers) => {
            return headers;
        }
    }),
    endpoints: (build) => ({
        fetchAllTopics: build.query({
            query: ({accessToken, page, pageSize, sort}) => ({
                url: '/topic',
                params: {
                    page,
                    pageSize,
                    sort
                },
                headers: {
                    "authorization": `Bearer ${accessToken}`
                }
            }),
            // transformResponse: (response, meta, arg) => response.data
        }),
        fetchAllTopicsByTag: build.query({
            query: ({accessToken, page, pageSize, sort, tagName}) => ({
                url: '/topic/ByTag',
                params: {
                    page,
                    pageSize,
                    sort,
                    tagName
                },
                headers: {
                    "authorization": `Bearer ${accessToken}`
                }
            }),
            // transformResponse: (response, meta, arg) => response.data
        }),
        fetchTopicDetails: build.query({
            query: (id) => ({
                url: `/topic/${id}`
            })
        }),
        setTopic: build.mutation({
            query: ({accessToken, name, content, attachmentsId, tagsNames}) => ({
                url: '/Topic',
                method: "POST",
                headers: {
                    "authorization": `Bearer ${accessToken}`
                },
                body:{
                    name,
                    content,
                    attachmentsId,
                    tagsNames
                }
            }),
        fetchUsersTopics: build.query({
            query: ({accessToken, UserId, page, pageSize, sort}) => ({
                url: '/topic/ByUserId',
                params: {
                    UserId,
                    page,
                    pageSize,
                    sort
                },
                headers: {
                    "authorization": `Bearer ${accessToken}`
                }
            }),
        })
    })
});
