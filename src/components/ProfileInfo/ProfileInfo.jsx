import React from 'react';
import profilePhoto from "../../img/20220721_145514.jpg";
import {Link, useParams} from "react-router-dom";
import MeProfile from "../../img/20220721_145514.jpg";

const ProfileDetails = (props: any) => {
    let profileId: string | undefined = useParams().profileId?.toString();
    return (
        <div className="container text-center">
            <div className="row justify-content-md-center">
                <div className="col-lg-3 col-md-10 col-sm-12 mt-3">
                    <div className="card card-body h-100">
                        <span className="avatar userAvatar"
                              style={{backgroundImage: `url(${MeProfile})`, margin: "0 auto"}}/>
                        <h3 className="form-control-plaintext">Ichi Cat</h3>
                        <h4>Stas Holoborodyi</h4>
                        <h5>Programmer</h5>
                        <h5>E-Mail: qwerty@gmail.com</h5>
                    </div>
                </div>
                <div className="col-lg-9 col-md-10 col-sm-12 mt-3">
                    <div className="card card-body markdown h-100 text-start divide-y">
                        <div className="row">
                            <div className="card-title">Basic info</div>
                            <div className="col-6">
                                <div className="mb-2">
                                    {/*Download SVG icon from http://tabler-icons.io/i/calendar*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                         fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                                        <line x1="16" y1="3" x2="16" y2="7"></line>
                                        <line x1="8" y1="3" x2="8" y2="7"></line>
                                        <line x1="4" y1="11" x2="20" y2="11"></line>
                                        <line x1="11" y1="15" x2="12" y2="15"></line>
                                        <line x1="12" y1="15" x2="12" y2="18"></line>
                                    </svg>
                                    Birth date: <strong>24/07/2000</strong>
                                </div>
                                <div className="mb-2">
                                    {/*Download SVG icon from http://tabler-icons.io/i/map-pin*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                         fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="11" r="3"></circle>
                                        <path
                                            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                    </svg>
                                    From: <strong><span className="flag flag-country-si"></span>
                                    Ukraine</strong>
                                </div>
                                <div className="mb-2">
                                    {/*Download SVG icon from http://tabler-icons.io/i/home*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                         fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                                    </svg>
                                    Lives in: <strong>Dnipro, Ukraine</strong>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-2">
                                    {/*Download SVG icon from http://tabler-icons.io/i/book*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                         fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                        <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
                                        <line x1="3" y1="6" x2="3" y2="19"></line>
                                        <line x1="12" y1="6" x2="12" y2="19"></line>
                                        <line x1="21" y1="6" x2="21" y2="19"></line>
                                    </svg>
                                    Went to: <strong>NTU "KhPI"</strong>
                                </div>
                                <div className="mb-2">
                                    {/*Download SVG icon from http://tabler-icons.io/i/briefcase*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                         fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                                        <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="12" y1="12" x2="12" y2="12.01"></line>
                                        <path d="M3 13a20 20 0 0 0 18 0"></path>
                                    </svg>
                                    Worked at: <strong>Freelance</strong>
                                </div>
                                <div>
                                    {/*Download SVG icon from http://tabler-icons.io/i/clock*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon me-2 text-muted" width="24"
                                         height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                         fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="9"></circle>
                                        <polyline points="12 7 12 12 15 15"></polyline>
                                    </svg>
                                    Time zone: <strong>Europe/Ukraine</strong>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4>About:</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem culpa cum
                                cumque
                                deserunt distinctio dolor dolorem dolores doloribus ducimus earum error facere id illo
                                illum in,
                                ipsam labore laudantium maxime necessitatibus nesciunt nobis odit praesentium quam
                                quisquam
                                saepe tempore temporibus totam, ullam voluptas! Accusamus aliquid autem in incidunt
                                laudantium?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
                <div className="col-lg-3 col-md-3 col-sm-4">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Liked posts</h3>
                        </div>
                        <div className="list-group list-group-flush">
                            <a href="#" className="list-group-item list-group-item-action"
                               aria-current="true">
                                First link item
                            </a>
                            <a href="#" className="list-group-item list-group-item-action">A second link
                                item</a>
                            <a href="#" className="list-group-item list-group-item-action">A third link item</a>
                            <a href="#" className="list-group-item list-group-item-action">A fourth link
                                item</a>
                            <a className="list-group-item list-group-item-action disabled">A disabled link
                                item</a>
                        </div>
                        <Link to="/likedPosts" className="card-btn">View all posts</Link>
                    </div>
                </div>
                <div className="col-lg-9 col-md-7 col-sm-8">
                    <div className="divide-y">
                        <div className="card w-100 center-block mb-3">
                            <div className="card-header"><h3 className="card-title cursor-pointer">1-st post</h3>
                                <div className="card-actions btn-actions"><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="12" cy="19" r="1"></circle>
                                        <circle cx="12" cy="5" r="1"></circle>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </a></div>
                            </div>

                            <div className="card-body p-0">
                                <div className="col-12 p-3 markdown mh-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, eos explicabo
                                        fuga fugiat incidunt labore nobis quibusdam sit tempora temporibus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-100 center-block mb-3">
                            <div className="card-header"><h3 className="card-title cursor-pointer">2-nd post</h3>
                                <div className="card-actions btn-actions"><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="12" cy="19" r="1"></circle>
                                        <circle cx="12" cy="5" r="1"></circle>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </a></div>
                            </div>
                            <div className="card-body p-0">
                                <div className="col-12 p-3 markdown mh-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolor est maxime non quos vel?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card w-100 center-block mb-3">
                            <div className="card-header"><h3 className="card-title cursor-pointer">3-rd post</h3>
                                <div className="card-actions btn-actions"><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"></path>
                                        <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"></path>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <polyline points="6 15 12 9 18 15"></polyline>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="12" cy="19" r="1"></circle>
                                        <circle cx="12" cy="5" r="1"></circle>
                                    </svg>
                                </a><a href="#" className="btn-action">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                         viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                         stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </a></div>
                            </div>
                            <div className="card-body p-0">
                                <div className="col-12 p-3 markdown mh-100">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate
                                        facere, laboriosam nulla quod rerum sit soluta tempore veniam voluptatem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileDetails;