import React from "react";

const TableComparison = (props) => {
    return ( 
        <div className="comparison">
        <table>
            <thead>
                <tr>
                    <th className="tl tl2"></th>
                    <th className="qbse">
                        Travailleur indépendant et Freelance
                    </th>
                    <th colSpan="2" className="qbo">
                        Petites entreprises qui ont besoin de comptabilité, de facturation ou de paie
                    </th>
                </tr>
                <tr>
                    <th className="tl"></th>
                    <th className="compare-heading">
                        Business
                    </th>

                    <th className="compare-heading">
                        Enterprise
                    </th>
                    <th className="compare-heading">
                        Custom
                    </th>
                </tr>

            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td colSpan="3">Séparer les affaires des dépenses personnelles</td>
                </tr>
                <tr className="compare-row">
                    <td>Entreprise / personnel séparé</td>
                    <td><span className="tickblue">✔</span></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="3">Estimer les paiements d'impôts</td>
                </tr>
                <tr>
                    <td>Estimer les paiements d'impôts</td>
                    <td><span className="tickblue">✔</span></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="3">Track deductible mileage</td>
                </tr>
                <tr className="compare-row">
                    <td>Track deductible mileage</td>
                    <td><span className="tickblue">✔</span></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Télécharger la banque en ligne</td>
                </tr>
                <tr>
                    <td>Télécharger la banque en ligne</td>
                    <td><span className="tickblue">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Fonctionne sur PC, Mac et mobile</td>
                </tr>
                <tr className="compare-row">
                    <td>Multi-appareil</td>
                    <td><span className="tickblue">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Créer des factures et des devis</td>
                </tr>
                <tr>
                    <td>Créer des factures et des devis</td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Gérer la TVA</td>
                </tr>
                <tr className="compare-row">
                    <td>Gérer la TVA</td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Exécutez la paie</td>
                </tr>
                <tr>
                    <td>Exécutez la paie</td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Nombre d'utilisateurs</td>
                </tr>
                <tr className="compare-row">
                    <td>Nombre d'utilisateurs</td>
                    <td className="tickblue">1 user</td>
                    <td className="tickgreen">3 users</td>
                    <td className="tickgreen">5 users</td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Gérer les factures et les paiements</td>
                </tr>
                <tr>
                    <td>Gérer les factures et les paiements</td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Gérez plusieurs devises</td>
                </tr>
                <tr className="compare-row">
                    <td>Gérez plusieurs devises</td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4"> Créer des budgets</td>
                </tr>
                <tr>
                    <td>Créer des budgets</td>
                    <td></td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Suivre le temps des employés</td>
                </tr>
                <tr className="compare-row">
                    <td>Suivre le temps des employés</td>
                    <td></td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
                <tr>
                    <td>&nbsp;</td>
                    <td colSpan="4">Contrôle du stock</td>
                </tr>
                <tr>
                    <td>Contrôle du stock</td>
                    <td></td>
                    <td></td>
                    <td><span className="tickgreen">✔</span></td>
                </tr>
            </tbody>
        </table>

    </div>
     );
}
 
export default TableComparison;