import React from 'react'

const CurrentQuestion = (props) => {
    return (
        <div className="container">
            <div className="my-5">
                <div className="text-center my-4">
                    <h4>Questions fréquentes</h4>
                </div>
                <div aria-multiselectable="true" className="row" id="accordion" role="tablist">
                    <div className="col-sm-6">
                        <div className="card no-shadow bordered">
                            <div className="card-header card-header-tab" data-parent="#accordion" data-toggle="collapse"
                                href="#inscription" id="headingOne" role="tab">
                                <h6 className="mb-0"><a aria-controls="inscription" aria-expanded="true" className="text-muted"
                                    data-parent="#accordion" data-toggle="collapse" href="#payment_card_detail">Suis-je
                                    obligé de payer pour m'inscrire? <span className="float-right">
                                        <i className="fas fa-chevron-down"></i></span></a>
                                </h6>
                            </div>
                            <div aria-labelledby="headingOne" className="collapse" id="inscription" role="tabpanel">
                                <div className="card-body pt-4">
                                    <p className="m-0">Non, l'inscription est gratuite avec le plan Membre gratuit. Par contre,
                                    il est nécessaire de s'abonner pour pouvoir faire des devis sur les appels d'offres
                                    publiés par nos clients. Vous pouvez résilier votre abonnement à tout moment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card no-shadow bordered">
                            <div className="card-header card-header-tab" data-parent="#accordion" data-toggle="collapse"
                                href="#post_offer" id="headingOne" role="tab">
                                <h6 className="mb-0"><a aria-controls="post_offer" aria-expanded="true" className="text-muted"
                                    data-parent="#accordion" data-toggle="collapse" href="#payment_card_detail">Que
                                    signifie répondre à un projet ? <span className="float-right">
                                        <i className="fas fa-chevron-down"></i></span></a>
                                </h6>
                            </div>
                            <div aria-labelledby="headingOne" className="collapse" id="post_offer" role="tabpanel">
                                <div className="card-body pt-4">
                                    <p className="m-0">Les clients publient des projets. Ils recherchent un prestataire pour
                                    accomplir des tâches bien précises. Faire un devis signifie proposer un prix, un
                                    délai et une prestation aux clients et avoir la possibilité de les contacter par
                                    messagerie privée.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card no-shadow bordered">
                            <div className="card-header card-header-tab" data-parent="#accordion" data-toggle="collapse"
                                href="#payment_mean" id="headingOne" role="tab">
                                <h6 className="mb-0"><a aria-controls="payment_mean" aria-expanded="true" className="text-muted"
                                    data-parent="#accordion" data-toggle="collapse" href="#payment_card_detail">Quels
                                    sont les moyens paiement disponible ? <span className="float-right">
                                        <i className="fas fa-chevron-down"></i></span></a>
                                </h6>
                            </div>
                            <div aria-labelledby="headingOne" className="collapse" id="payment_mean" role="tabpanel">
                                <div className="card-body pt-4">
                                    <p className="m-0">Il est possible de payer un abonnement par carte bancaire ou PayPal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card no-shadow bordered">
                            <div className="card-header card-header-tab" data-parent="#accordion" data-toggle="collapse"
                                href="#duration" id="headingOne" role="tab">
                                <h6 className="mb-0"><a aria-controls="duration" aria-expanded="true" className="text-muted"
                                    data-parent="#accordion" data-toggle="collapse" href="#payment_card_detail">Quelle
                                    est la durée minimale des abonnements ? <span className="float-right">
                                        <i className="fas fa-chevron-down"></i></span></a>
                                </h6>
                            </div>
                            <div aria-labelledby="headingOne" className="collapse" id="duration" role="tabpanel">
                                <div className="card-body pt-4">
                                    <p className="m-0">La durée minimale d’abonnement est d’un mois (30 jours).</p>
                                </div>
                            </div>
                        </div>
                        <div className="card no-shadow bordered">
                            <div className="card-header card-header-tab" data-parent="#accordion" data-toggle="collapse"
                                href="#deactivate_renew" id="headingOne" role="tab">
                                <h6 className="mb-0"><a aria-controls="deactivate_renew" aria-expanded="true" className="text-muted"
                                    data-parent="#accordion" data-toggle="collapse" href="#payment_card_detail">Peut-on
                                    se désabonner à tout moment ? <span className="float-right">
                                        <i className="fas fa-chevron-down"></i></span></a>
                                </h6>
                            </div>
                            <div aria-labelledby="headingOne" className="collapse" id="deactivate_renew" role="tabpanel">
                                <div className="card-body pt-4">
                                    <p className="m-0">Oui. La période d’abonnement est de 30 jours à partir de la date de
                                    paiement. Le renouvellement est automatique mais vous pouvez le stopper et résilier
                                    votre abonnement à tout moment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card no-shadow bordered">
                            <div className="card-header card-header-tab" data-parent="#accordion" data-toggle="collapse"
                                href="#stop_renew" id="headingOne" role="tab">
                                <h6 className="mb-0"><a aria-controls="stop_renew" aria-expanded="true" className="text-muted"
                                    data-parent="#accordion" data-toggle="collapse" href="#payment_card_detail">Comment
                                    pourrais-je résilier l'abonnement ? <span className="float-right">
                                        <i className="fas fa-chevron-down"></i></span></a>
                                </h6>
                            </div>
                            <div aria-labelledby="headingOne" className="collapse" id="stop_renew" role="tabpanel">
                                <div className="card-body pt-4">
                                    <p className="m-0">Vous pourrez vous rendre à tout moment dans la rubrique "Mon abonnement"
                                    de votre compte afin de le résilier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 text-center">
                        <p>Pour toute question, vous pouvez <a href="#">nous contacter</a> sans hésiter</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentQuestion;