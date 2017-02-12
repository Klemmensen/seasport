from . import models


class BoatForm():

    def validate(self, request):

        errors = {'status': True, 'error_messages' : {}}

        if not request.POST.get('name') or len(request.POST.get('name')) < 4:
            errors['error_messages']['name'] = 'Navn skal være på minimum 4 bogstaver'
            errors['status'] = False
        else:
            try:
                obj = models.Boat.objects.filter(pk=request.POST.get('id'))
                if models.Boat.objects.exclude(id__in=obj).filter(name = request.POST.get('name')).filter(club_id = 1).count() >= 1:
                    errors['error_messages']['name'] = 'Der findes allerede en båd med det valgte navn'
                    errors['status'] = False
            except:
                models.Boat.DoesNotExist
                errors['status'] = True

        if errors['status']:
            errors['message'] = 'Båden er opdateret.'
            errors['status'] = True

        return errors