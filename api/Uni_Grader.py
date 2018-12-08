import requests


def get_cycle(session, url):
    cycle = session.post(url)
    return cycle.json().get('data')[0].get('id_ciclo')


def get_student_info(session, url):
    info = session.post(url)
    return info.json().get('data').get('niveles')[0].get('ide')


def get_all(PORTAL_USER, PORTAL_PW):
    # UNISON api urls
    LOGIN_URL = 'https://buhos.uson.mx/web/apps/portalAlumnos/index.php/auth/login/entrar'
    GRADES_URL = 'https://buhos.uson.mx/portalalumnos/obtener/calificacionesFinalesEstudiante'
    INFO_URL = 'https://buhos.uson.mx/web/apps/portalAlumnos/index.php/auth/sesion/datos_alumno'
    CYCLE_URL = 'https://buhos.uson.mx/web/apps/portalAlumnos/index.php/horario/ciclosActivos'

    form_data_login = {'u': PORTAL_USER, 'p': PORTAL_PW}


    with requests.Session() as s:
        s.post(LOGIN_URL, data=form_data_login)

        # Cycle id for grades
        id_cycle = get_cycle(s, CYCLE_URL)

        # Student id for grades
        id_student = get_student_info(s, INFO_URL)

        grades_res = s.post(GRADES_URL, data={
            'idEstudiante': id_student,
            'idCiclo': id_cycle,
        })

    subjects = grades_res.json().get('data')
    cont = 0
    array = []
    print([f'{dic["DescMateria"]} - {dic["Cal"] or 0}' for dic in subjects])
    for subject in subjects:
        subject_grade = subject.get('Cal') + subject.get('Cal')
        array[cont] = subject_grade
        cont = cont+1
    return array