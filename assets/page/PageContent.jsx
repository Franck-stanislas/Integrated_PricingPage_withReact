import React from 'react'

const PageContent = (props) => {
    return (
        <main>
            <div className="container">
                <h1 className="text-center pricing-table-title">Plans de tarification</h1>
                <p className="text-center pricing-table-subtitle">
                    30 premiers jours absolument gratuits pour tout plan, pas de carte de crédit nécessaire pour commencer.
                </p>

                <ul className="nav nav-pills justify-content-center pricing-tab" id="pricing-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="monthly-tab" data-toggle="pill" href="#monthly" role="tab"
                            aria-controls="monthly" aria-selected="true">Mensuel</a>
                    </li>
                    <div className="custom-control custom-switch pricing-tab-switch">
                        <input type="checkbox" className="custom-control-input" id="pricing-tab-switch" />
                        <label className="custom-control-label" for="pricing-tab-switch"><span className="sr-only">Toggle
                            Tabs</span></label>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link" id="yearly-tab" data-toggle="pill" href="#yearly" role="tab"
                            aria-controls="yearly" aria-selected="false">Annuel</a>
                    </li>
                </ul>

                <div className="tab-content pricing-tab-content" id="pricing-tab-content">
                    <div className="tab-pane active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card pricing-card">
                                    <div className="card-body">
                                        <h3 className="pricing-plan-title">Business</h3>
                                        <p className="h1 pricing-plan-cost">$10</p>
                                        <ul className="pricing-plan-features">
                                            <li>5GB file storage</li>
                                            <li>File manager</li>
                                            <li>Upgrade any time</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#!" className="card-link pricing-plan-purchase-btn">Get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card pricing-card pricing-card-highlighted">
                                    <div className="card-body">
                                        <h3 className="pricing-plan-title">Enterprise</h3>
                                        <p className="h1 pricing-plan-cost">$30</p>
                                        <ul className="pricing-plan-features">
                                            <li>15GB file storage</li>
                                            <li>File manager</li>
                                            <li>Upgrade any time</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#!" className="card-link pricing-plan-purchase-btn">Get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card pricing-card">
                                    <div className="card-body">
                                        <h3 className="pricing-plan-title">Custom</h3>
                                        <p className="h1 pricing-plan-cost">$50</p>
                                        <ul className="pricing-plan-features">
                                            <li>50GB file storage</li>
                                            <li>File manager</li>
                                            <li>Upgrade any time</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#!" className="card-link pricing-plan-purchase-btn">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="yearly" role="tabpanel" aria-labelledby="yearly-tab">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card pricing-card">
                                    <div className="card-body">
                                        <h3 className="pricing-plan-title">Business</h3>
                                        <p className="h1 pricing-plan-cost">$120</p>
                                        <ul className="pricing-plan-features">
                                            <li>5GB file storage</li>
                                            <li>File manager</li>
                                            <li>Upgrade any time</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#!" className="card-link pricing-plan-purchase-btn">Get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card pricing-card pricing-card-highlighted">
                                    <div className="card-body">
                                        <h3 className="pricing-plan-title">Enterprise</h3>
                                        <p className="h1 pricing-plan-cost">$360</p>
                                        <ul className="pricing-plan-features">
                                            <li>15GB file storage</li>
                                            <li>File manager</li>
                                            <li>Upgrade any time</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#!" className="card-link pricing-plan-purchase-btn">Get started</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card pricing-card">
                                    <div className="card-body">
                                        <h3 className="pricing-plan-title">Custom</h3>
                                        <p className="h1 pricing-plan-cost">$600</p>
                                        <ul className="pricing-plan-features">
                                            <li>50GB file storage</li>
                                            <li>File manager</li>
                                            <li>Upgrade any time</li>
                                        </ul>
                                    </div>
                                    <div className="card-footer">
                                        <a href="#!" className="card-link pricing-plan-purchase-btn">Get started</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center pt-5 pb-4 mb-0">
                    <span className="font-weight-bold">Offre limitée:</span> économisez 30% sur un forfait annuel. Obtenez un
                coupon <a href="#!" className="coupon-page-link">ici</a>.
            </p>
            </div>
        </main>

    );
}

export default PageContent;