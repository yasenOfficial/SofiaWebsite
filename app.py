from flask import Flask, render_template, jsonify, url_for, make_response

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('landmarks.html')

@app.route('/landmarks.json')
def landmarks_json():
    landmarks = landmarks = [
        {
            "name": "National Palace of Culture (NDK)",
            "lat": 42.6872,
            "lng": 23.3195,
            "icon": "ndk",
            "description": "The largest congress center in Southeastern Europe.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761420472287!6m8!1m7!1sj3iWNwGVh1lK-D_rmzN_Tg!2m2!1d42.68558061228042!2d23.31909332659416!3f184.40564082458874!4f14.046655125766307!5f0.7820865974627469", 
            "images": {
            "desktop": [
                url_for('static', filename='images/NDK/NDK1_desktop.jpg'),
                url_for('static', filename='images/NDK/NDK2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/NDK/NDK1_mobile.jpg'),
                url_for('static', filename='images/NDK/NDK2_mobile.jpg'),
                url_for('static', filename='images/NDK/NDK3_mobile.jpg')
            ]
        }
        },
        {
            "name": "Vitoshka Street",
            "lat": 42.6977,
            "lng": 23.3229,
            "icon": "vitoshka",
            "description": "Popular pedestrian street for shopping and cafes.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761420761623!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUUZTcE5rR2dJOHVVQUEydlA.!2m2!1d42.68585659484076!2d23.31786986225877!3f9.912647504390153!4f1.3735683057407186!5f0.7820865974627469", 
             "images": {
            "desktop": [
                url_for('static', filename='images/Vitoshka/Vitoshka1_desktop.jpg'),
                url_for('static', filename='images/Vitoshka/Vitoshka2_desktop.jpeg')
            ],
            "mobile": [
                url_for('static', filename='images/Vitoshka/Vitoshka1_mobile.jpg'),
                url_for('static', filename='images/Vitoshka/Vitoshka2_mobile.jpeg')
            ]
        }
        },
        {
            "name": "Serdica",
            "lat": 42.69745,
            "lng": 23.32133,
            "icon": "serdica",
            "description": "Remains of the Roman city with ruins and archaeological sites.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761421129222!6m8!1m7!1sqH59iavcWo_5ka439BgTZg!2m2!1d42.69807799406232!2d23.32211928921006!3f357.8937525921975!4f-2.648435031632758!5f0.7820865974627469",
             "images": {
            "desktop": [
                url_for('static', filename='images/Serdika/Serdica1_desktop.jpg'),
                url_for('static', filename='images/Serdika/Serdica2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Serdika/Serdica1_mobile.jpg'),
                url_for('static', filename='images/Serdika/Serdica2_mobile.jpg')
            ]
        }
        },
        {
            "name": "Rotunda St. George",
            "lat": 42.6963,
            "lng": 23.3241,
            "icon": "rotondata",
            "description": "Oldest preserved building in Sofia dating back to the 4th century.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761421247673!6m8!1m7!1sGCAGidzcCQZlAgOqx262zg!2m2!1d42.6969908895033!2d23.32319125774079!3f204.99390811953432!4f6.041918816949192!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Rotonda/Rotonda1_desktop.jpg'),
                url_for('static', filename='images/Rotonda/Rotonda2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Rotonda/Rotonda1_mobile.jpg'),
                url_for('static', filename='images/Rotonda/Rotonda2_mobile.jpg')
            ]
        }
        },
        {
            "name": "The Baths",
            "lat": 42.6972,
            "lng": 23.3219,
            "icon": "banite",
            "description": "Historic public baths built during Ottoman period.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1698031750000!6m8!1m7!1sCAoSLEFGMVFpcE9yWnVjQ0ZqTlVqQ3BNRUZnVnh6R3ZITlpoU1pOZ3RzZjR5NWtq!2m2!1d42.6972!2d23.3219!3f0!4f0!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Baths/Baths1_desktop.jpg'),
                url_for('static', filename='images/Baths/Baths2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Baths/Baths1_mobile.jpg'),
                url_for('static', filename='images/Baths/Baths2_mobile.jpg')
            ]
        }
        },
        {
            "name": "St. Alexander Nevsky Cathedral",
            "lat": 42.6958,
            "lng": 23.3320,
            "icon": "nevski",
            "description": "Iconic Orthodox cathedral with golden domes.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761421619858!6m8!1m7!1sWGdO74BMqpPrMY6I_9pH0A!2m2!1d42.6993247964144!2d23.3229926349563!3f56.190385565925425!4f-6.992686299362987!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Nevski/Nevski1_desktop.jpg'),
                url_for('static', filename='images/Nevski/Nevski2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Nevski/Nevski1_mobile.jpg'),
                url_for('static', filename='images/Nevski/Nevski2_mobile.jpg')
            ]
        }
        },
        {
            "name": "Library",
            "lat": 42.6967,
            "lng": 23.3269,
            "icon": "biblioteka",
            "description": "Largest library in Bulgaria.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761422676315!6m8!1m7!1sBq3Bfbah4G25KRxBb0JX1A!2m2!1d42.69493490404459!2d23.3351281624944!3f101.12371130448588!4f11.923715997429!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Library/Library1_desktop.jpg'),
                url_for('static', filename='images/Library/Library2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Library/Library1_mobile.jpg'),
                url_for('static', filename='images/Library/Library2_mobile.jpg')
            ]
        }
        },
        {
            "name": "University",
            "lat": 42.6975,
            "lng": 23.3234,
            "icon": "universitet",
            "description": "Bulgaria’s oldest university.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761422814458!6m8!1m7!1sSiFachJCRu9vMwC2YV_Fdw!2m2!1d42.69326878876129!2d23.33445688678462!3f41.41189793672286!4f17.67284225494612!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/University/University1_desktop.jpg'),
                url_for('static', filename='images/University/University2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/University/University1_mobile.jpg'),
                url_for('static', filename='images/University/University2_mobile.jpg')
            ]
        }
        },
        {
            "name": "Tech Park",
            "lat": 42.6833,
            "lng": 23.3100,
            "icon": "techpark",
            "description": "Modern tech hub and innovation center.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1698031900000!6m8!1m7!1sCAoSLEFGMVFpcE1Ud2dKX0pKZkpYZ3JHaDFiV0l0bXNRNGpIY1RVTU1hY1R6!2m2!1d42.6975!2d23.3234!3f0!4f0!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/TechPark/TechPark1_desktop.jpg'),
                url_for('static', filename='images/TechPark/TechPark2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/TechPark/TechPark1_mobile.jpg'),
                url_for('static', filename='images/TechPark/TechPark2_mobile.jpg')
            ]
        }
        },
        {
            "name": "Bell Towers",
            "lat": 42.6830,
            "lng": 23.3150,
            "icon": "kambani",
            "description": "Famous bell towers with panoramic views.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761423158243!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ0U2UERpNkFF!2m2!1d42.61900335917532!2d23.37924055644428!3f5.851964161764994!4f28.112149439637975!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Bells/Bells1_desktop.jpg'),
                url_for('static', filename='images/Bells/Bells2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Bells/Bells1_mobile.jpg'),
                url_for('static', filename='images/Bells/Bells2_mobile.jpg')
            ]
        }
        },
        {
            "name": "Boyana Church",
            "lat": 42.6414,
            "lng": 23.3141,
            "icon": "boyana",
            "description": "UNESCO site with medieval frescoes.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761423372457!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRDQxSnJ4Y1E.!2m2!1d42.64422410880445!2d23.26516509306921!3f96.1638764558055!4f24.506437611665334!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Boyana/Boyana1_desktop.jpg'),
                url_for('static', filename='images/Boyana/Boyana2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Boyana/Boyana1_mobile.jpg'),
                url_for('static', filename='images/Boyana/Boyana2_mobile.jpg')
            ]
        }
        },
        {
            "name": "Kopito Viewpoint",
            "lat": 42.6628,
            "lng": 23.2717,
            "icon": "kopito",
            "description": "Scenic viewpoint on Vitosha Mountain.",
            "embed": "https://www.google.com/maps/embed?pb=!4v1761423442401!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQzJfSlNENHdF!2m2!1d42.63737392390021!2d23.24320158154441!3f214.79058749458704!4f-6.696068493478521!5f0.7820865974627469",
            "images": {
            "desktop": [
                url_for('static', filename='images/Kopitoto/Kopitoto1_desktop.jpg'),
                url_for('static', filename='images/Kopitoto/Kopitoto2_desktop.jpg')
            ],
            "mobile": [
                url_for('static', filename='images/Kopitoto/Kopitoto1_mobile.jpg'),
                url_for('static', filename='images/Kopitoto/Kopitoto2_mobile.jpg')
            ]
        }
        }
    ]
    
    response = make_response(jsonify(landmarks))
    response.headers['Cache-Control'] = 'no-store'
    return response

if __name__ == '__main__':
    app.run(debug=True, port=6969)
