import requests
from .models import User


# UNISON api urls
LOGIN_URL = 'https://buhos.uson.mx/web/apps/portalAlumnos/index.php/auth/login/entrar'
GRADES_URL = 'https://buhos.uson.mx/portalalumnos/obtener/calificacionesFinalesEstudiante'
INFO_URL = 'https://buhos.uson.mx/web/apps/portalAlumnos/index.php/auth/sesion/datos_alumno'
CYCLE_URL = 'https://buhos.uson.mx/web/apps/portalAlumnos/index.php/horario/ciclosActivos'

def get_cycle(session, url):
    cycle = session.post(url)
    return cycle.json().get('data')[0].get('id_ciclo')


def get_student_info(session, url):
    info = session.post(url)
    return info.json().get('data').get('niveles')[0].get('ide')


def get_all_grades(name):
    usr = User.objects.filter(username = name).first()
    stu_id = usr.student_id
    cyc_id = usr.cycle_id
    with requests as s:
        grades_res = s.post(GRADES_URL, data={
            'idEstudiante': stu_id,
            'idCiclo': cyc_id,
        })

        subjects = grades_res.json().get('data')
        array = []
        print([f'{dic["DescMateria"]} - {dic["Cal"] or 0}' for dic in subjects])
        for subject in subjects:
            subject_grade = subject.get('DescMateria') + '-' + subject.get('Cal') 
            array.append(subject_grade)
    return array


def get_all_grades_JSON(name):
    usr = User.objects.filter(username = name).first()
    stu_id = usr.student_id
    cyc_id = usr.cycle_id
    grades_res = requests.post(GRADES_URL, data={
        'idEstudiante': stu_id,
        'idCiclo': cyc_id,
    })

    subjects = grades_res.json().get('data')
    return subjects


def get_all_id(USER_NAME, PORTAL_USER, PORTAL_PW):
    form_data_login = {'u': PORTAL_USER, 'p': PORTAL_PW}
    s.post(LOGIN_URL, data=form_data_login)
    # Cycle id for grades
    id_cycle = get_cycle(s, CYCLE_URL)
    # Student id for grades
    id_student = get_student_info(s, INFO_URL)
    newUser = User(username=USER_NAME, student_id = id_student, cycle_id = id_cycle)
    newUser.save()
    return get_all_grades_JSON(USER_NAME)    